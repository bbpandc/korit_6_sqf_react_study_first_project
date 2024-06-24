import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css"
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";

function DataTable() {
    const [ mode, setMode ] = useState(0); // 0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ isDeleting, setDeleting ] = useState(false);

    // 페이지가 최초에 한 번 열렸을 때 한 번만 실행
    useEffect(() => {
        const lsproducts = localStorage.getItem("products");
        setProducts(!lsproducts ? [] : JSON.parse(lsproducts));
    }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return ( 
        <div className="table-main-container">
            <DataTableHeader mode={mode} setMode={setMode} setProducts={setProducts} setDeleting={setDeleting}/>
            <DataTableBody mode={mode} setMode={setMode} products={products} setProducts={setProducts} isDeleting={isDeleting} setDeleting={setDeleting}/>
        </div>
     );
}

export default DataTable;