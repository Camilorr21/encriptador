// Esta función encripta el texto
function cipher(textToCipher) {
    // Validar que solo contenga letras minúsculas sin acentos
    if (!/^[a-z\s]+$/.test(textToCipher)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return "";
    }

    let resulText = '';
    for (let i = 0; i < textToCipher.length; i++) {
        switch (textToCipher[i]) {
            case 'e':
                resulText += 'enter';
                break;
            case 'i':
                resulText += 'imes';
                break;
            case 'a':
                resulText += 'ai';
                break;
            case 'o':
                resulText += 'ober';
                break;
            case 'u':
                resulText += 'ufat';
                break;
            default:
                resulText += textToCipher[i];
        }
    }
    return resulText;
}

// Esta función desencripta el texto
function decipher(textToDecipher) {
    // Validar que solo contenga letras minúsculas sin acentos ni caracteres especiales
    if (!/^[a-z\s]+$/.test(textToDecipher)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return "";
    }

    let resulText = '';
    for (let i = 0; i < textToDecipher.length; i++) {
        if (textToDecipher.startsWith('enter', i)) {
            resulText += 'e';
            i += 4;
        } else if (textToDecipher.startsWith('imes', i)) {
            resulText += 'i';
            i += 3;
        } else if (textToDecipher.startsWith('ai', i)) {
            resulText += 'a';
            i += 1;
        } else if (textToDecipher.startsWith('ober', i)) {
            resulText += 'o';
            i += 3;
        } else if (textToDecipher.startsWith('ufat', i)) {
            resulText += 'u';
            i += 3;
        } else {
            resulText += textToDecipher[i];
        }
    }
    return resulText;
}


// Esta función muestra el texto encriptado
function showEncryptedText() {
    let content = document.getElementById('text-input').value;
    let encryptedText = cipher(content);
    if (encryptedText) {
        document.getElementById('result').textContent = encryptedText;
        document.getElementById('result').style.display = 'block'; // Mostrar traducción
        document.getElementById('copy').style.display = 'block'; // Mostrar botón de copiar
        document.getElementById('image1').style.display = 'none';
        document.getElementById('message1').style.display = 'none';
        document.getElementById('message2').style.display = 'none';
    }
}

// Esta función muestra el texto desencriptado
function showDecryptedText() {
    let content = document.getElementById('text-input').value;
    let decryptedText = decipher(content);
    if (decryptedText) {
        document.getElementById('result').textContent = decryptedText;
        document.getElementById('result').style.display = 'block'; // Mostrar traducción
        document.getElementById('copy').style.display = 'block'; // Mostrar botón de copiar
        document.getElementById('image1').style.display = 'none';
        document.getElementById('message1').style.display = 'none';
        document.getElementById('message2').style.display = 'none';
    }
}


// Función de copiar
function copyText() {
    let textToCopy = document.getElementById('result').textContent;
    navigator.clipboard.writeText(textToCopy).then(
        () => {
            console.log('Texto copiado');
        },
        () => {
            console.log('Error al copiar');
        }
    );
}

