import { Copyright } from "../components/Footers/Copyright";

// Waiver page
function Waiver(): JSX.Element {
  const paragraphText = [
    <p>
      I understand the risk of injury from <strong>CLUB</strong> activities and
      using any <strong>CLUB</strong> equipment is significant, including the
      potential for permanent paralysis and death, I{" "}
      <strong>KNOWINGLY AND FREELY ASSUME ALL SUCH RISKS</strong>, both known
      and unknown. I acknowledge that this is an{" "}
      <strong>UNSUPERVISED FITNESS CENTER</strong> and I assume all risks
      associated with using exercise equipment and exercising alone without the
      aid and presence of <strong>CLUB</strong> staff on the premises.
      Furthermore, I understand that <strong>Everyday Iron</strong> is a
      trademark of <strong>Everyday Iron, LLC</strong>.
    </p>,
    <p>
      <strong>
        I HEREBY RELEASE, INDEMNIFY, AND HOLD HARMLESS THE CLUB AND Everyday
        Iron, LLC
      </strong>
      , their respective owners, officers, affiliates, agents and employees,
      other participants, sponsoring agencies, sponsors, advertisers, and, if
      applicable, owners and lessors of premises used to conduct any sponsored
      event (Releases),{" "}
      <strong>
        WITH RESPECT TO ANY AND ALL INJURY, DISABILITY, DEATH, OR LOSS OR DAMAGE
      </strong>{" "}
      to person or property,{" "}
      <strong>WHETHER ARISING FROM THE NEGLIGENCE OF THE RELEASEES</strong> or
      otherwise, that may arise out of or in connection with my using any of the
      equipment or the facilities of the <strong>CLUB</strong> or any incident
      that occurs while using the <strong>CLUB’s</strong> facilities or engaging
      in CLUB activities on or off the premises or otherwise related to my{" "}
      <strong>CLUB</strong> membership.
    </p>,
    <p>
      <strong>I, EXPRESSLY AGREE</strong> that this release is intended to be as
      board and inclusive as permitted by the{" "}
      <strong>laws of California</strong> and if a portion of this release is
      held invalid, the balance shall remain in full force and effect. This
      release shall apply to my heirs, assigns, personal representatives and any
      other next of kin. I understand that the <strong>CLUB</strong>
      is relying on this release in agreeing to enter into this{" "}
      <strong>Agreement</strong>.
    </p>,
    <p>
      <strong>DEFAULT AND LATE PAYMENTS</strong>: Should <strong>Member</strong>{" "}
      default on any payment obligation as called for in this{" "}
      <strong>Agreement</strong>, the <strong>CLUB</strong> will have the right
      to declare the entire remaining balance due and payable and{" "}
      <strong>Member </strong>
      agrees to pay allowable interest, and all costs of collection, including
      but not limited to collection agency fees, court costs, and attorney fees.
      A default occurs when any payment due under this
      <strong> Agreement</strong> is more than ten (<strong>10</strong>) days
      late. Should any monthly payment become more than ten (<strong>10</strong>
      ) days past due, the <strong>Member</strong> will be charged a late fee.
      An additional service fee will be charged for any check, draft, credit
      card, or order returned for insufficient funds or any other reason. If the{" "}
      <strong>Member</strong> is paying monthly dues by{" "}
      <strong>Electronic Funds Transfer </strong>(<strong>EFT</strong>) , the{" "}
      <strong>Club’s Designated Billing Company, Everyday Iron LLC</strong>
      ., reserves the right to draft via <strong>EFT</strong> all amounts owed
      by the <strong>Member</strong> including any and all late fees and service
      fees subject to appropriate <strong>State</strong> and
      <strong> Federal Law</strong>.
    </p>,
    <p>
      <strong>RIGHT TO CHANGE DESIGNATED BILLING COMPANY</strong>: The{" "}
      <strong>Club </strong>
      hereby reserves the right to change the{" "}
      <strong>Designated Billing Company</strong> at their discretion and
      without warning. If such a change is made, the full terms and conditions
      of this <strong>Agreement</strong> will continue to apply and{" "}
      <strong>Member</strong> agrees to authorize the new{" "}
      <strong>Designated Billing Company</strong> to continue drafting Member’s
      account.
    </p>,
    <h3 className="capitalize">
      I. <strong>Member Assumption of Risk and Release</strong>
    </h3>,
    <h3 className="capitalize">
      II. <strong>Terms and Conditions</strong>
    </h3>,
  ];

  return (
    <div className="font-serif my-0 mx-12 sm:mx-24">
      <div className="my-12">
        <h1 className="text-center text-2xl font-bold text-rose-700">
          Everyday Iron Gym
        </h1>
      </div>

      <div className="my-12">
        <h2 className="text-center font-bold text-xl">Release of Liability</h2>
      </div>

      <div className="my-8">{paragraphText[5]}</div>
      <div className="my-8">{paragraphText[0]}</div>
      <div className="my-8">{paragraphText[1]}</div>
      <div className="my-8">{paragraphText[2]}</div>
      <div className="my-8">{paragraphText[6]}</div>
      <div className="my-8">{paragraphText[3]}</div>
      <div className="my-8">{paragraphText[4]}</div>

      <div className="my-12">
        <Copyright />
      </div>
    </div>
  );
}

export default Waiver;
