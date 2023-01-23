import { v4 as uuidV4 } from "uuid";

class Task {
  name!: string;
  description!: string;
  status!: number;
  created_at!: Date;
  priority!: number;
  id!: string;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
