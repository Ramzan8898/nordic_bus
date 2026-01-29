import { useQuery } from "@apollo/client";
import BookingShimmer from "./skelton/BookingShimmer";
import { GET_WP_FORM_FIELDS } from "../graphql/wpFormFields";
const FORM_ID = 170;
const SITE_URL = "http://localhost/nordicfleet";
import { useState } from "react";

export default function Booking() {
    const { data, loading } = useQuery(GET_WP_FORM_FIELDS, {
        variables: { formId: FORM_ID },
    });

    const [formData, setFormData] = useState({});
    console.log(setFormData);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    if (loading) return <BookingShimmer />;

    const fields = data?.wpFormFields || [];

    const handleChange = (id, value) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const submitForm = async () => {
        setSubmitting(true);

        const response = await fetch(
            `${SITE_URL}/wp-json/wpforms/v1/submit/${FORM_ID}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fields: formData }),
            }
        );

        setSubmitting(false);

        if (response.ok) {
            setSuccess(true);
            setFormData({});
        } else {
            alert("Submission failed");
        }
    };

    return (
        <div className="relative h-screen text-white bg-cover bg-center py-25 bg-[#0a0a0a] overflow-hidden"
            style={{ backgroundImage: "url('/src/assets/fire car.jpg')" }}>
            <h3 className="text-(--primary) uppercase text-center">Drive Starts Here</h3>
            <h1 className="text-white text-4xl text-center">Begin Your Juorney With One Click</h1>
            <div className="max-w-6xl mx-auto bg-[#11111198] p-10 rounded-2xl border border-white/20 mt-3">
                <div className="grid grid-cols-1 gap-6 w-full">
                    {fields.map(field => (
                        <div key={field.id}>
                            <label className="block text-sm text-white mb-2">
                                {field.label}
                                {field.required && " *"}
                            </label>

                            {field.type === "textarea" ? (
                                <textarea
                                    rows="4"
                                    required={field.required}
                                    value={formData[field.id] || ""}
                                    onChange={e => handleChange(field.id, e.target.value)}
                                    className="bg-[#FFFFFF00] border border-[#e5e5e591] rounded-lg px-6 py-4.5 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-white focus:ring-2 focus:ring-white/20 w-full"
                                />
                            ) : (
                                <input
                                    type={mapInputType(field.type)}
                                    required={field.required}
                                    value={formData[field.id] || ""}
                                    onChange={e => handleChange(field.id, e.target.value)}
                                    className="bg-[#24232378] border border-[#e5e5e591] rounded-lg px-6 py-4.5 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-white focus:ring-2 focus:ring-white/20 w-full"
                                />
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={submitForm}
                    disabled={submitting}
                    className="w-full mt-10 py-4 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:scale-[0.97] disabled:opacity-50">
                    {submitting ? "Submitting..." : "Ask Availability"}
                </button>

                {success && (
                    <p className="text-green-400 text-center mt-4">
                        Form submitted successfully
                    </p>
                )}
            </div>
        </div>
    );

}
function mapInputType(type) {
    switch (type) {
        case "email":
            return "email";
        case "phone":
            return "tel";
        case "date":
            return "date";
        default:
            return "text";
    }
}