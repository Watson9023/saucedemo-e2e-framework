export type CustomerDetails = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class TestDataFactory {
  static customer(overrides: Partial<CustomerDetails> = {}): CustomerDetails {
    return {
      firstName: 'Automation',
      lastName: 'Engineer',
      postalCode: '2000',
      ...overrides
    };
  }
}
