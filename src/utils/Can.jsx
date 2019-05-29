const check = (user) => {
    // check condition and return true or false
    return true;
};

const Can = props =>
    check(props.user)
        ? props.yes()
        : props.no();

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;
