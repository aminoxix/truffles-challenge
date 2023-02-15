import { FormWrapper } from "./FormWrapper";

type UserData = {
  file: string;
};

type UploadDocsProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UploadDocsForm({
  file,
  updateFields,
}: UploadDocsProps)
{
  return (
    <FormWrapper
      title="Upload document"
      description="Please upload your document"
    >
      <div className="flex flex-col gap-9 pt-9">
        <label>Upload document</label>
        <input
          className="h-9 border p-2 font-light text-gray-500"
          type="file"
          value={ file }
          onChange={ (e) => updateFields({ file: e.target.value }) }
        />
      </div>
    </FormWrapper>
  );
}
