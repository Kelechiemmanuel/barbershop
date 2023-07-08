
function booking() {
    document.querySelector('.middle-side-booking').style.display = 'block';
    document.querySelector('.middle-side-staff').style.display = 'none';
    document.querySelector('.middle-side-service').style.display = 'none'; 
}

function staffs() {
    document.querySelector('.middle-side-booking').style.display = 'none';
    document.querySelector('.middle-side-staff').style.display = 'block';
    document.querySelector('.middle-side-service').style.display = 'none'; 
}
function services() {
    document.querySelector('.middle-side-booking').style.display = 'none';
    document.querySelector('.middle-side-staff').style.display = 'none';
    document.querySelector('.middle-side-service').style.display = 'block'; 
    document.querySelector('.headline').style.display = 'none';
}

function openStaff() {
    document.querySelector('.staff-around').style.display = 'block';
    document.querySelector('.book-con').style.display = 'none';   
    document.querySelector('.headline').style.display = 'none';
}

function backBtn() {
    document.querySelector('.book-con').style.display = 'block';
    document.querySelector('.staff-around').style.display = 'none';
    document.querySelector('.headline').style.display = 'flex';
}

function staffOpen() {
    document.querySelector('.date-time').style.display = 'block';
    document.querySelector('.staff-all2').style.display = 'none';
    document.querySelector('.staff-all3').style.display = 'none';
    document.querySelector('.staff-all4').style.display = 'none';
    document.querySelector('.headline').style.display = 'none';
    document.querySelector('.back-arrow').style.display = 'none';
}

function backBtnz() {
    document.querySelector('.staff-all2').style.display = 'flex';
    document.querySelector('.staff-all3').style.display = 'flex';
    document.querySelector('.staff-all4').style.display = 'flex';
    document.querySelector('.date-time').style.display = 'none';
    document.querySelector('.back-arrow').style.display = 'flex';
}


function nextBtn() {
    document.querySelector('.contact-form').style.display = 'flex';
    document.querySelector('.date-time').style.display = 'none';
}