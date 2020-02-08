import React from 'react'; // To run JSX, must always import React

const SearchBox = (props) => {
	return(
		<div className="pa2"> {/* wrap everything in a div to conform to JSX standard of returning 1 thing */}
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Area" //background text in text box that will be replaced when typing inside
                onChange={props.onSearchChange} //onChange is a function. pass in prop.onSearchChange, want component to tell it to run only when there is searchChange
                />
		</div>
)
} 
export default SearchBox;
