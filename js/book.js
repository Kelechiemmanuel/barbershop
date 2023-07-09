function booking() {
    document.querySelector('.middle-side-booking').style.display = 'block';
    document.querySelector('.middle-side-service').style.display = 'none';
    document.querySelector('.middle-side-staff').style.display = 'none';
}

function staffs() {
    document.querySelector('.middle-side-staff').style.display = 'block';
    document.querySelector('.middle-side-booking').style.display = 'none';
    document.querySelector('.middle-side-service').style.display = 'none';

}

function services() {
    document.querySelector('.middle-side-service').style.display = 'block';
    document.querySelector('.middle-side-staff').style.display = 'none';
    document.querySelector('.middle-side-booking').style.display = 'none';

}

function openStaff() {
    document.querySelector('.worker').style.display = 'block';
    document.querySelector('.quick').style.display = 'none';
    document.querySelector('.book-con').style.display = 'none';
}

function myFunction() {
    document.getElementById('demo1').style.display = 'block';
    document.getElementById('demo2').style.display = 'none';
    document.getElementById('demo3').style.display = 'none';
    document.querySelector('.staff-around').style.display = 'block';
    
}
function myStaff() {
    document.getElementById('demo1').style.display = 'none';
    document.getElementById('demo2').style.display = 'block';
    document.getElementById('demo3').style.display = 'none';
    document.querySelector('.staff-around').style.display = 'block';
    
}
function myWork() {
    document.getElementById('demo1').style.display = 'none';
    document.getElementById('demo2').style.display = 'none';
    document.getElementById('demo3').style.display = 'block';
    document.querySelector('.staff-around').style.display = 'block';
}

function goBack() {
    document.querySelector('.book-con').style.display = 'block';
    document.querySelector('.worker').style.display = 'none';
}


