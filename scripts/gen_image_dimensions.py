#!/usr/bin/env python3
"""Regenerate _data/image_dimensions.yml for images referenced from _docs."""

import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "_docs"
OUT = ROOT / "_data" / "image_dimensions.yml"


def resolve_path(img: str) -> Path:
    if img.startswith("/assets/"):
        return ROOT / img.lstrip("/")
    if img.startswith("assets/"):
        return ROOT / img
    return ROOT / "uploads" / img


def main() -> None:
    seen = {}
    for path in DOCS.glob("*.md"):
        text = path.read_text()
        for pattern in (
            r'(?:phone-screenshot-image|image)\.html[^%]*?\bimg="([^"]+)"',
            r"(?:phone-screenshot-image|image)\.html[^%]*?\bimg='([^']+)'",
        ):
            for img in re.findall(pattern, text):
                seen[img.split("/")[-1]] = resolve_path(img)

    lines = [
        "# Auto-generated intrinsic sizes for docs images.",
        "# Regenerate: python3 scripts/gen_image_dimensions.py",
        "",
    ]
    missing = []
    for key in sorted(seen):
        file_path = seen[key]
        if not file_path.exists():
            missing.append(str(file_path.relative_to(ROOT)))
            continue
        out = subprocess.check_output(
            ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(file_path)],
            text=True,
        )
        width = height = None
        for line in out.splitlines():
            if "pixelWidth" in line:
                width = int(line.split()[-1])
            if "pixelHeight" in line:
                height = int(line.split()[-1])
        lines.append(f'"{key}":')
        lines.append(f"  width: {width}")
        lines.append(f"  height: {height}")

    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text("\n".join(lines) + "\n")
    print(f"Wrote {len(seen) - len(missing)} entries to {OUT.relative_to(ROOT)}")
    if missing:
        raise SystemExit(f"Missing files: {', '.join(missing)}")


if __name__ == "__main__":
    main()
