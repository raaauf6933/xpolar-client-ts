import Button from '@/components/Button';
import Card from '@/components/Card';
import Table from '@/components/Table';
import { currencyFormat } from '@/utils/currencyFormatter';
import * as React from 'react';

const DebtorCaseDetails: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card
            title="Contacts"
            toolbar={
              <>
                <Button color="primary">New Contact</Button>
              </>
            }
          >
            <Table
              size="small"
              columns={[
                {
                  label: 'Phone/E-mail',
                  path: 'contact_details',
                },
                {
                  label: 'type',
                  path: 'contact_type',
                },
                {
                  label: 'Answered',
                  path: 'no_answered',
                },
                {
                  label: 'Not Answered',
                  path: 'no_not_answered',
                },
                {
                  label: 'Description',
                  path: 'description',
                },
              ]}
              data={[
                {
                  contact_details: '639464523',
                  contact_type: 'Mobile',
                  description: 'Debtor',
                  no_answered: 1,
                  no_not_answered: 5,
                },
              ]}
            />
          </Card>
          <div className="pt-4">
            <Card
              title="Events"
              toolbar={<Button color="primary">New Event</Button>}
            >
              <Table
                size="small"
                columns={[
                  {
                    label: 'Action Date',
                    path: 'action_date',
                  },
                  {
                    label: 'Action Type',
                    path: 'action_type',
                  },
                  {
                    label: 'Action Code',
                    path: 'action_code',
                  },
                  {
                    label: 'Spoken With',
                    path: 'spoken_with',
                  },
                  {
                    label: 'Source',
                    path: 'source',
                  },
                  {
                    label: 'Information',
                    path: 'information',
                  },
                  {
                    label: 'Note',
                    path: 'note',
                  },
                  {
                    label: 'Created By',
                    path: 'created_by',
                  },
                ]}
                data={[
                  {
                    action_code: 'Answered',
                    action_date: '12/17/2020',
                    action_type: 'Outgoing Call',
                    created_by: 'Mark Joseph Dyauco',
                    information: 'test',
                    note: 'Test',
                    source: '639464523',
                    spoken_with: 'Debtor',
                  },
                ]}
              />
            </Card>
          </div>
        </div>
        <div>
          <Card title="PTP History">
            <Table
              size="small"
              columns={[
                {
                  label: 'Action Date',
                  path: 'action_date',
                },
                {
                  label: 'Due Date',
                  path: 'due_date',
                },
                {
                  label: 'Amount',
                  path: 'amount',
                },
                {
                  label: 'Status',
                  path: 'status',
                },
              ]}
              data={[
                {
                  action_date: '12/17/2020',
                  amount: currencyFormat(3000),
                  due_date: '12/17/2020',
                  status: 'Active',
                },
              ]}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default DebtorCaseDetails;
