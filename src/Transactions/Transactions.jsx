import PropTypes from "prop-types";
import { Table, Thead, Tr } from "./Transactions.styled";

export const TransactionHistory = ({items}) => {
    return (
        <Table>
                    <Thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </Thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                        <Tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </Tr>))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};