import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CourseEdit = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="ImageSrc" validate={[required()]} label="Image" />
      </SimpleForm>
    </Create>
  );
};
