export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_ACIMA1SltASPMnHPrnQx0jPF00Bx4tiPMA',
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'nd-note-app-uploads',
  },
  apiGateway: {
    REGION: 'ap-south-1',
    URL: 'https://lilwusxgtk.execute-api.ap-south-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'ap-south-1',
    USER_POOL_ID: 'ap-south-1_tKDgJknwU',
    APP_CLIENT_ID: '4qqbvnrprrp8hogj0j68n3vd1s',
    IDENTITY_POOL_ID: 'ap-south-1:215fd56f-7249-48d7-a071-e62089506bc2',
  },
};
