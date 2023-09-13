export class LateCheckInValidationError extends Error {
  constructor() {
    super('The check-in only be valitade until 20 minutes for created.')
  }
}
