

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-4/12 mx-auto my-10">
            <i className="text-yellow-500 mb-2 font-medium">--- {subHeading} ---</i>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;