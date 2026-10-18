
let btn = document.querySelector('button');
let notificationContent = document.querySelector('.notification-content');

btn.addEventListener('click', function () {
    let notification = document.createElement('div');

    notification.classList.add('notification');

    notification.textContent = 'notification 1';

    notificationContent.appendChild(notification);

    setTimeout(() => {

        notification.classList.add('remove');

        setTimeout(() => {
            notification.remove()
        }, 500);

    }, 3000);
});