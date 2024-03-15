/* eslint-disable react/prop-types */
export default function HeadTable({ sizeW, changeSelect, entries, handleChange }) {
    return <>
        <div className='show' style={{ width: sizeW }}>
            <div>
                Show
                <select name="entries" id="entries" className='show_select' onChange={changeSelect}>
                    {entries.map((content, index) => {
                        return <option key={index} value={content}>{content}</option>
                    })}
                </select>
                entries
            </div>
            <input className='search' type="search" placeholder='Search' onChange={handleChange} />
        </div>
    </>
}