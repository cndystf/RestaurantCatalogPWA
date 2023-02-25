import Swal from 'sweetalert2';

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'success',
    confirmButtonText: 'Okay',
  });
};

const initSwalError = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'error',
    confirmButtonText: 'Okay',
  });
};

export { initSwalSuccess, initSwalError };
