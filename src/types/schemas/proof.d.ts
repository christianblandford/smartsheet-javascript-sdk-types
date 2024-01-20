type ProofType = 'DOCUMENT' | 'IMAGE' | 'MIXED' | 'NONE' | 'VIDEO';

type Proof = {
  id: number;
  originalId: number;
  name: string;
  proofType: ProofType;
  proofRequestUrl: string;
  version: number;
  lastUpdatedAt: string | number;
  lastUpdatedBy: CreatedBy<string>;
  isCompleted: boolean;
  attachments?: Attachment[];
  discussions?: Discussion[];
};

type ProofRequestStatus = 'ACTIVE' | 'EXPIRED' | 'PROOF_DELETED';

type ProofRequest = {
  id: number;
  proofId: Proof['id'];
  sentBy: CreatedBy<string>;
  sentAt: string | number;
  isDownloadable: boolean;
  status: ProofRequestStatus;
  ccMe: boolean;
  message: string;
  sendTo: { email: string }[];
  subject: string;
};

type ProofRequestActionStatus = 'APPROVED' | 'PENDING' | 'REJECTED';

type ProofRequestAction = {
  user: CreatedBy<string>;
  actionStatus: ProofRequestActionStatus;
};
