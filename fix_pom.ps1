$path = "pom.xml"
$text = Get-Content -Path $path -Raw
$pattern = '(?s)<dependency>\s*<groupId>com\.fasterxml\.jackson\.core</groupId>\s*<artifactId>jackson-databind</artifactId>\s*<dependency>\s*<groupId>com\.fasterxml\.jackson\.core</groupId>\s*<artifactId>jackson-databind</artifactId>\s*</dependency>\s*</dependency>'
$replacement = "                <dependency>`n                <groupId>com.fasterxml.jackson.core</groupId>`n                <artifactId>jackson-databind</artifactId>`n                </dependency>"
$text = [regex]::Replace($text, $pattern, $replacement)
Set-Content -Path $path -Value $text
Write-Host 'pom.xml repaired'