import { useEffect, useState } from "react";
import styled from "styled-components";
import { Eye } from "react-feather";

const ViewCounter = ({slug}: {slug: string}) => {

    const [views, setViews] = useState(0);

    useEffect(() => {
        fetch(`/api/posts/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setViews(data.count);
            })

        const registerView = () => {
            fetch(`/api/posts/${slug}`, {
                method: 'POST',
            });
        }

        registerView();
    }, []);

    console.log(views);

    return (
        <>
            <Count>
                <span>{(views ?? 0) ? views.toLocaleString() : "–––"}</span>
                <Eye />
            </Count>
        </>
    )
}

const Count = styled.div`
    padding: 10px;
    font-size: 1.1em;
    font-weight: 500;
    color: #5D81AB;
    font-family: Fira Code;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export default ViewCounter;