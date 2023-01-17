/* eslint-disable prettier/prettier */
import Button from '@/components/Button';
import Dialog, { DialogProps } from '@/components/Dialog';
import TextInput from '@/components/TextInput';
import * as React from 'react';

interface BatchInputDialogProps extends DialogProps {
  onChange: (data: any) => void;
  name: string;
}

const BatchInputDialog = (props: BatchInputDialogProps) => {
  const { onClose, open, onChange, name } = props;
  const [value, setValue] = React.useState<string>();

  const handleChange = () => {
    onChange({
      target: {
        name,
        value,
      },
    });
    onClose();
  };

  return (
    <>
      <Dialog
        title="Input Batch Number"
        onClose={onClose}
        open={open}
        actions={
          <>
            <Button
              onClick={() => handleChange()}
              label="Save"
              color="primary"
            />
            <Button onClick={() => setValue('')} label="Reset" color="error" />
          </>
        }
      >
        <TextInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          multipleline
          placeholder="Ex. 20100,20200,..."
          rows={8}
        />
      </Dialog>
    </>
  );
};

export default BatchInputDialog;
