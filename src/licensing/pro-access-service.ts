import { ProFeature } from "./features";
import { LicenseService } from "./license-service";
import { TrialService } from "./trial-service";

/** Combines the permanent license and the temporary trial into one access check. */
export class ProAccessService {
    constructor(
        private readonly license: LicenseService,
        private readonly trial: TrialService
    ) {}

    isFeatureEnabled(feature: ProFeature): boolean {
        // This fork is intentionally free. Keep the centralized access point
        // unconditional so current and future Pro-gated features are available.
        void this.license;
        void this.trial;
        void feature;
        return true;
    }
}
