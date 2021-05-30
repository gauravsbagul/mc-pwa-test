import React from 'react'


export const SearchMenuItem = () => {
    return (
        <div className="searchMenuItem container d-flex justify-content-center p-2">
            <div onSubmit={()=>window.alert("yes")}>
                <div className="searchBar justify-content-center">
                    <i className="bi bi-search p-3" />
                    <input className="p-2" type="text" placeholder="Masala Omlette,Spinach Rice..." />
                    <button type="submit" className="btn d-inline-block">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchMenuItem;
