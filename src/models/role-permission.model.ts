import { CrudPermission } from "../types";

export const RolePermissions: Record<string, number> = {
  admin: CrudPermission.CREATE | CrudPermission.READ | CrudPermission.UPDATE | CrudPermission.DELETE, // 15
  user: CrudPermission.CREATE | CrudPermission.READ | CrudPermission.UPDATE, // 7
  guest: CrudPermission.READ, // 2
};