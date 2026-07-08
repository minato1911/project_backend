#!/usr/bin/env python3
import re

# Read the file
with open('pom.xml', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and fix the malformed duplicate jackson-databind dependency
# Pattern: find the broken nested dependency structure
pattern = r'(<dependency>\s*<groupId>com\.fasterxml\.jackson\.core</groupId>\s*<artifactId>jackson-databind</artifactId>\s*)<dependency>\s*<groupId>com\.fasterxml\.jackson\.core</groupId>\s*<artifactId>jackson-databind</artifactId>\s*</dependency>\s*(</dependency>)'

replacement = r'\1\2'

content_fixed = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back
with open('pom.xml', 'w', encoding='utf-8') as f:
    f.write(content_fixed)

print("pom.xml fixed")
