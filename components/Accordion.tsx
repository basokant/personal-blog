type AccordionProps = {
    title: string,
    children: React.ReactNode;
}

const Accordion = ({title, children}: AccordionProps) => {
    return (
        <details>
            <summary>{title}</summary>
            <br/>
            {children}
        </details>
    )
}

export default Accordion;