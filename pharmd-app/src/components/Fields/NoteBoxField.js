import React from 'react'
import tw, { styled } from "twin.macro";
import MuiPaper from "@material-ui/core/Paper";
import {NOTE} from "../../constants/apiObjects";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import BasicTag from "../Basic/BasicTag";
import {DeleteButton} from 'react-admin';

const CardRoot = styled.div`
    flex-grow: 1;
    margin: 15px;
`

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl h-64 w-56 shadow-cardLight`}
  padding: 7px;
  margin: auto;
  
`;

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
`

const MAX_TITLE_LENGTH = 15;
const MAX_BODY_LENGTH = 30;

const NoteBoxField = ({ record, studentId, onDelete }) => {
    const id = record[NOTE.ID];
    const title = record[NOTE.TITLE];
    const body = record[NOTE.BODY];
    const tags = record[NOTE.TAGS];
    const date = new Date(record[NOTE.DATE]).toLocaleDateString();

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '…' : str;
    }

    return (
        <CardRoot>
            <Paper>

                    <CardHeader
                        action={
                            <div>
                                <DeleteButton label="" onClick={onDelete} basePath={`/students/${studentId}/details`} record={record} resource="notes" />
                            </div>
                        }
                        title={truncate(title, MAX_TITLE_LENGTH)}
                        subheader={date}
                    />
                    <CardContent>
                        <p>
                            {truncate(body, MAX_BODY_LENGTH)}
                        </p>
                        <Tags>
                            {tags.map((tag, ind) => {
                                if (ind < 2) {
                                    return <BasicTag text={tag}/>;
                                } else {
                                    const more = `${tags.length - 2} more`
                                    return <BasicTag text={more} />
                                }

                            })}
                        </Tags>

                    </CardContent>
            </Paper>
        </CardRoot>
    )
}

export default NoteBoxField;