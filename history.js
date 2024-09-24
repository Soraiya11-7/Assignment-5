document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('bg-color_1');
    document.getElementById('donation-btn').classList.add('bg-none','border-[#1111114D]');
    document.getElementById('history-btn').classList.add('bg-color_1');
    document.getElementById('history-btn').classList.remove('border-[#1111114D]');

    showSectionById('history');

});

document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-container');

});