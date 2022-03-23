// import * as React from "react";
// import { List, Datagrid, TextField, ReferenceField,EditButton } from 'react-admin';



import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleList,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';
// import { ReferenceInput, SelectInput, TextInput, List } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
// export const PostList = props => (
    // <List filters={postFilters} {...props}>
    //     {/* <Datagrid rowClick="edit"> */}
    //     <Datagrid >
        
    //     <TextField source="id" />
            
    //     <ReferenceField source="userId" reference="users">
    //             {/* <TextField source="id" /> */}
    //             <TextField source ="name"/>
    //         </ReferenceField>
    //         <TextField source="title" />
    //         {/* <TextField source="body" /> */}
    //         <EditButton/>
    //     </Datagrid>
    // </List>
// );

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return ( 
    <List {...props}>
       {isSmall ? (
       <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
        ):(
            <Datagrid >
        
            <TextField source="id" />
                
            <ReferenceField source="userId" reference="users">
                    {/* <TextField source="id" /> */}
                    <TextField source ="name"/>
                </ReferenceField>
                <TextField source="title" />
                {/* <TextField source="body" /> */}
                <EditButton/>
            </Datagrid>
            )}
    </List>
);}

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
        {/* <TextInput disabled source="id" /> */}
            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
const PostTitle = ({ record }) => {
       return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);