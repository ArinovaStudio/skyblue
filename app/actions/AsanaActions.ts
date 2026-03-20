"use server";

import {
  ASANA_FAQS_PROJECT_ID,
  ASANA_FEATURES_PROJECT_ID,
  ASANA_PROJECT_ID,
  ASANA_TOKEN,
} from "@/lib/constants";

export async function PlanFlight(formData: FormData) {
  try {
    // 🔹 Extract values
    const title = formData.get("title") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const frequency = formData.get("frequency") as string;
    const solution = formData.get("solution") as string;
    const source = formData.get("source") as string;
    const message = formData.get("message") as string;
    const state = formData.get("state") as string;
    const from = formData.get("from") as string;
    const to = formData.get("to") as string;
    const journey_date = formData.get("journey_date") as string;
    const add_return = (formData.get("add_return") as string).toLowerCase();
    const return_date = formData.get("journey_date") as string;
    const passengers = formData.get("passengers") as string;

    // 🔥 Validations (one by one)

    if (!title) throw new Error("Title is required");
    if (!firstName) throw new Error("First name is required");
    if (!lastName) throw new Error("Last name is required");
    if (!phone) throw new Error("Phone number is required");
    if (!email) throw new Error("Email is required");
    if (!frequency) throw new Error("Flight frequency is required");
    if (!solution) throw new Error("Flying solution is required");
    if (!source) throw new Error("Source is required");
    if (!message) throw new Error("Message is required");
    if (!state) throw new Error("State is required");
    if (!from) throw new Error("Origin is required");
    if (!to) throw new Error("Destination is required");
    if (!journey_date) throw new Error("journey_date is required");
    if (add_return === "yes" && !return_date)
      throw new Error("return date is required");
    if (!passengers) throw new Error("no. of passengers is required");
    // 🔥 Extra validations (recommended)

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      throw new Error("Invalid email format");
    }

    if (!/^[0-9]{8,15}$/.test(phone)) {
      throw new Error("Invalid phone number");
    }

    // 🔹 Enum mapping
    const titleMap: any = {
      "Mr.": "1213748494789365",
      "Ms.": "1213748494789366",
    };

    if (!titleMap[title]) {
      throw new Error("Invalid title selected");
    }

    // 🔹 Send request to Asana
    const request = await fetch("https://app.asana.com/api/1.0/tasks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ASANA_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: `✈️ ${firstName} ${lastName}`,
          projects: [ASANA_PROJECT_ID],

          custom_fields: {
            "1213748494789364": titleMap[title],
            "1213748494789368": firstName,
            "1213748494789370": lastName,
            "1213748494789372": phone,
            "1213748494789374": email,
            "1213748494789376": frequency,
            "1213748494789378": solution,
            "1213748494789380": source,
            "1213748684631577": message,
            "1213748684631579": state,

            "1213748929662167": from,
            "1213748929662169": to,
            "1213748889982718": { date: journey_date },
            "1213748889982716":
              add_return === "no" ? null : { date: return_date },
            "1213748929662173": add_return,
            "1213748889982720": passengers,
          },
        },
      }),
    });

    const data = await request.json();

    if (!request.ok) {
      throw new Error(data?.errors?.[0]?.message || "Asana request failed");
    }

    return {
      success: true,
      message: "Details Submitted Successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Details Not Submitted!",
    };
  }
}

export async function getFaqs() {
  try {
    const res = await fetch(
      `https://app.asana.com/api/1.0/tasks?project=${ASANA_FAQS_PROJECT_ID}&opt_fields=name,custom_fields`,
      {
        headers: {
          Authorization: `Bearer ${ASANA_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.errors?.[0]?.message || "Failed to fetch");
    }
    return { success: true, data: data.data };
  } catch (error: any) {
    return { success: false, message: error.message || "Error Occured!" };
  }
}

export async function getFeatures() {
  try {
    const res = await fetch(
      `https://app.asana.com/api/1.0/tasks?project=${ASANA_FEATURES_PROJECT_ID}&opt_fields=name,custom_fields`,
      {
        headers: {
          Authorization: `Bearer ${ASANA_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.errors?.[0]?.message || "Failed to fetch");
    }
    return { success: true, data: data.data };
  } catch (error: any) {
    return { success: false, message: error.message || "Error Occured!" };
  }
}
