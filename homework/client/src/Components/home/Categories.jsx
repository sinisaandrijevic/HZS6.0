import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled /*, TableCell*/ } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';


const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
    background: #fff;
`;

// Styled Table Cell in order to have proper vertical alignment with category icons.
const StyledTableCell = styled(TableCell)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`

const CategoryIcon = styled('img')`
    filter: opacity(0.8);
    margin-right: 8px;
`;
    
const StyledButton = styled(Button)`
    margin: 14px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>        
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <StyledLink to={`/?category=${category.type}`}>
                                    <StyledTableCell>
                                        <CategoryIcon src={`categories/${category.type.toLowerCase()}.svg`}/>
                                        <StyledLink to={`/?category=${category.type}`}>{category.type}</StyledLink>
                                    </StyledTableCell>
                                </StyledLink>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>

            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Match</StyledButton>
            </Link>
        </>
    )
}

export default Categories;