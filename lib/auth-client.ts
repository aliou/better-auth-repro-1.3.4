import { createAuthClient } from "better-auth/client";
import {
  jwtClient,
  magicLinkClient,
  organizationClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [magicLinkClient(), organizationClient(), jwtClient()],
});

// Export typed hooks
export const useSession = authClient.useSession;
export const useActiveOrganization = authClient.useActiveOrganization;
