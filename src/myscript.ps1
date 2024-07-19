# Örnek bir PowerShell betik dosyası

# Merhaba dünya yazdırma
Write-Output "Merhaba dünya!"

# Kullanıcıdan isim isteyip selam yazdırma
$name = Read-Host -Prompt "İsminizi girin"
Write-Output "Merhaba, $name!"

# Dosyanın sonu
Write-Output "Betik tamamlandı."
