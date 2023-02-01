import PropTypes from "prop-types";
import { Section, StatisticItem, StatisticList } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && (<h2>{title}</h2>)}
            <StatisticList>
                {stats.map(({ id, label, percentage }) =>
                <StatisticItem key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage + "%"}</span>
                </StatisticItem>
                )}
            </StatisticList>
        </Section>
    );
};

Statistics.propsTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};