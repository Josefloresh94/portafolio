import { FormControl } from '@angular/forms';

export interface Contact {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  subject: FormControl<string | null>;
  message: FormControl<string | null>;
}
