import { useAuthStore } from '@/store/useAuthStore';

export function useHasPermission(permissionToCheck: string | string[]) {
  const permissions = useAuthStore((state) => state.userInfo?.Permissions || []);

  if (Array.isArray(permissionToCheck)) {
    return permissionToCheck.every((perm) => permissions.includes(perm));
  }
  return permissions.includes(permissionToCheck);
}

export function useUserRole() {
  const user = useAuthStore((state) => state.userInfo);
  return user?.PermissionId || user?.SystemRole || null;
}

export function useIsClubOwner() {
  const role = useUserRole();
  return role === 'ClubOwner';
}

export function useIsClubMember() {
  const role = useUserRole();
  return role === 'ClubMember';
}