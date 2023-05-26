export const INPUT_FIELDS = [
    {
        id: 0,
        label: 'Fornavn',
        name: 'firstName',
        customValidation: { required: true, minlength: 4 },
    },
    {
        id: 1,
        label: 'Sobrenome',
        name: 'lastName',
        customValidation: { required: true, minlength: 4 },
    },
    {
        id: 2,
        label: 'Endereço',
        name: 'address1',
        customValidation: { required: true, minlength: 4 },
    },
    {
        id: 3,
        label: 'CEP',
        name: 'postcode',
        customValidation: { required: true, minlength: 4, pattern: '[+0-9]{4,6}' },
    },
    {
        id: 4,
        label: 'Cidade',
        name: 'city',
        customValidation: { required: true, minlength: 2 },
    },
    {
        id: 5,
        label: 'E-mail',
        name: 'email',
        customValidation: { required: true, type: 'email' },
    },
    {
        id: 6,
        label: 'Telefone',
        name: 'phone',
        customValidation: { required: true, minlength: 8, pattern: '[+0-9]{8,12}' },
    },
];