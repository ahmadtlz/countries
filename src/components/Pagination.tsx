import React from 'react';
import styled from 'styled-components';

export interface IProps {
  totalCountries:number;
  countryPerPage:number;
  currentPage:number;
  paginate:(pageNumber:number) => void;
  // onClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Pagination:React.FC<IProps> = ({
  totalCountries, countryPerPage, paginate, currentPage
}:IProps) => {
  const pageNumbers:number[] = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row style={{

    }}
    >
      {
        pageNumbers.map((number:number) => (
          <List
            onClick={() => paginate(number)}
            currentPage={currentPage}
            key={number}
            number={number}
          >
            {number}

          </List>

        ))
     }
    </Row>
  );
};

const List = styled.button`
    width: 35px;
    margin:5px;
    display:block;
    text-align: 'center';
    padding: 8px;
    cursor: pointer;
    border:1px solid transparent;
    outline:none;
    border-radius:2px;
    background-color:${({ currentPage, number }:{currentPage:number;number:number}) => (currentPage === number ? '#21b6b7' : '#efefef')}; 
    color: ${({ currentPage, number }:{currentPage:number;number:number}) => (currentPage === number ? '#efefef' : '#21b6b7')};
    @media(max-width:720px){
      width: 35px;
       margin:10px;
  }

`;

const Row = styled.div`
  display: flex;
  justify-content:space-around;
  margin: 15px;
  align-items: center;

  @media(max-width:720px){
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export default Pagination;
