import { v4 as uuidV4 } from "uuid";

class Task {
  name!: string;
  description!: string;
  status!: boolean;
  created_at!: Date;
  id!: string;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
