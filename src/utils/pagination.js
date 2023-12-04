const paginationLogic =  (currentPage, residents) => {
    // Cantidad de residentes por pagina 
    const RESIDENT_PER_PAGE = 20;
    // Cantida total de paginas 
    const totalPages = Math.ceil(residents.length / RESIDENT_PER_PAGE);
    // rResidentes que se van a mostrar en la pagina actual
    const sliceEnd = currentPage * RESIDENT_PER_PAGE;
    const sliceStart = sliceEnd - RESIDENT_PER_PAGE;
    const residentsInCurrentPage = residents.slice(sliceStart, sliceEnd);
    // generacion de arreglo con los numeros de paginas que se van a mostrar
    const pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i);
    }

    return { pages, residentsInCurrentPage };
};

export { paginationLogic };