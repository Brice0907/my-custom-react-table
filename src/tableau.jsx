/* eslint-disable react/prop-types */
import * as React from "react";
import './tableau.css'
import { useState } from 'react';

/**
 * @param {Array<Object>} content - Displays the provided data in the table.
 * @param {Array} entries - Displays the provided data to manage the number of entries in the table.
 * @param {boolean} showing - indicates whether or not we display the number of elements in the table.
 * @param {string} backColor - The background color to apply, in CSS format.
 * @param {string} lineColor - The line color to apply, in CSS format.
 * @param {string} buttonColor - The background button color to apply, in CSS format.
 * @param {string} sizeH - The height to apply, in CSS format (for example '100px').
 * @param {string} sizeW - The width to apply, in CSS format (for example '100px').
 * @return {ReactNode} The rendered table component.
 */

export default function Tableau({ content, entries, showing, backColor, lineColor, buttonColor, sizeH, sizeW }) {

	const [tab, setTab] = useState(parseInt(entries[0]));
	const [currentPage, setCurrentPage] = useState(1);
	const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
	const [searchTerm, setSearchTerm] = useState('');

	let columns = [];
	let displayedContent = [];

	let allPages = Math.ceil(content.length / tab)
	const startIndex = (currentPage - 1) * tab;
	const endIndex = startIndex + tab;


	// Function page change
	function changeSelect(e) {
		const value = parseInt(e.target.value)
		setTab(value)
	}

	function changePage(pageNumber) {
		if (pageNumber !== 0 && pageNumber !== allPages + 1) {
			setCurrentPage(pageNumber)
		}
	}


	// Function de tri
	function ColumnTri(key) {
		let direction = 'ascending';
		if (sortConfig.key === key || sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	}

	const formatDateString = (dateString) => {
		const [day, month, year] = dateString.split('/');
		return new Date(`${year}-${month}-${day}`);
	};


	// Trier les données
	if (sortConfig.key) {
		content.sort((a, b) => {
			const valueA = a[sortConfig.key.content];
			const valueB = b[sortConfig.key.content];

			const isDateA = /^\d{2}\/\d{2}\/\d{4}$/.test(valueA);
			const isDateB = /^\d{2}\/\d{2}\/\d{4}$/.test(valueB);

			if (isDateA && isDateB) {
				const dateA = formatDateString(a[sortConfig.key.content]);
				const dateB = formatDateString(b[sortConfig.key.content]);

				if (dateA < dateB) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				if (dateA > dateB) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
			} else {
				if (a[sortConfig.key.content] < b[sortConfig.key.content]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				if (a[sortConfig.key.content] > b[sortConfig.key.content]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
			}
		});
	}

	// Affichage des données
	if (content.length > 0) {
		let currentContent = content.slice(startIndex, endIndex);
		columns = Object.keys(currentContent[0] || {});
		displayedContent = currentContent.slice(0, tab);
	}

	// Barre de recherche / tri
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredContent = content.filter((row) => {
		return columns.some((content) => {
			const cellValue = row[content].toString().toLowerCase();
			return cellValue.includes(searchTerm.toLowerCase());
		});
	});

	// Affichage des données selon tri
	if (filteredContent.length < content.length) {
		let currentContent = filteredContent.slice(startIndex, endIndex);
		columns = Object.keys(currentContent[0] || {});
		displayedContent = currentContent.slice(0, tab);
		allPages = Math.ceil(filteredContent.length / tab)
	}

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


		<table className='list' style={{ width: sizeW, height: sizeH }}>
			{filteredContent.length === 0 ? <div>La recherche n&apos;a donné aucun résultat correspondant à votre requête.</div> : null}
			<thead>
				<tr>
					{columns.map((content, index) => (
						<th key={index} onClick={() => ColumnTri({ content })} className='list_thead'>{content}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{displayedContent.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map((content, index) => (
							<td key={index} className={rowIndex !== 0 ? 'list_tbody list_line' : 'list_tbody'} style={{ backgroundColor: backColor, borderColor: lineColor }}>
								{row[content]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>


		{filteredContent.length === 0 ? null : <div style={{ width: sizeW }} className={showing === false ? 'show center' : 'show'}>

			{showing === false ? null : <div>
				Showing {startIndex + 1} to {filteredContent.length < content.length ?
					endIndex > filteredContent.length ? filteredContent.length : endIndex : endIndex > content.length ? content.length : endIndex} of {filteredContent.length < content.length ? filteredContent.length : content.length} entries
			</div>}

			<div className='show_page'>
				<div style={{ backgroundColor: buttonColor }} className='show_page_prev show_page_button' onClick={() => changePage(currentPage - 1)}>Previous</div>
				<div className='show_page_text'>{currentPage}/{allPages}</div>
				<div style={{ backgroundColor: buttonColor }} className='show_page_next show_page_button' onClick={() => changePage(currentPage + 1)}>Next</div>
			</div>

		</div>}
	</>
}