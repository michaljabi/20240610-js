/**
 * This script is also valid JS.
 *
 * But It will work only when particular .html file will include it as:
 *
 * <script src="./f03-script-from-other-file.js"></script>
 *
 */

const testMe = 'Hello from shared scope 🤪'


function handleConfirm(event) {
    alert('Order 2024/06/10 confirmed !')
    console.log(event)
}

// It is better to use addEventListener in favor of 
// document.querySelector('button').addEventListener('click', handleConfirm)
