import { useState } from "react";

const scenarios = [
  {
    id: 1,
    title: "السيناريو: خطوات البيع الكاملة",
    dialogue: [
      { speaker: "زبون", text: "مرحبا، بس عم بتفرّج..." },
      { speaker: "أنت", options: ["أهلاً وسهلاً! بدي بس أفهم شو بتدور عليه اليوم؟", "في شي محدد بدك إياه؟", "إذا بدك أي مساعدة احكيلي."] , correct: 0 },
      { speaker: "زبون", text: "بفكر أشتري غسالة بس مش مقرر بعد." },
      { speaker: "أنت", options: ["شو أهم شي بدك إياه بالغسالة؟", "الأسعار كلها ممتازة، شوف لحالك.", "كل الغسالات حلوة، خد أي وحدة."] , correct: 0 },
      { speaker: "زبون", text: "يهمني إنها تكون موفرة وبتنضف منيح." },
      { speaker: "أنت", options: ["في عندنا موديل جديد بيوفر كهربا ونتائجه ممتازة، بتحب أفرجيك؟", "كلهم نفس الشي بصراحة.", "يعني شو ما أخدت كله واحد"] , correct: 0 },
      { speaker: "زبون", text: "بس السعر شوي غالي." },
      { speaker: "أنت", options: ["بفهمك تمام، بس المنتج عليه كفالة 5 سنين وراح يريحك على المدى البعيد.", "هيك السعر، بدك تشتري ولا لأ؟", "إذا السعر غالي عليك روح شوف محلات ثانية."] , correct: 0 },
      { speaker: "زبون", text: "ممكن أدفع دفعة أولى والباقي تقسيط؟" },
      { speaker: "أنت", options: ["طبعاً، عنا خطط تقسيط ميسّرة. نبلش بالإجراءات؟", "آه بس بدك تدفع كلشي خلال أسبوع.", "ما بقبل تقسيط أنا."] , correct: 0 }
    ]
  }
];

export default function SalesTrainer() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const current = scenarios[0].dialogue[step];

  const handleOption = (index) => {
    setSelected(index);
    if (index === scenarios[0].dialogue[step].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelected(null);
      setStep(step + 1);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h1>تدريب حواري للمبيعات</h1>
      {step < scenarios[0].dialogue.length ? (
        <>
          {current.speaker === "أنت" ? (
            <div>
              <p><strong>ردك:</strong></p>
              {current.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOption(index)}
                  style={{
                    width: '100%',
                    textAlign: 'right',
                    marginBottom: 10,
                    padding: 10,
                    background: selected === index ? '#007bff' : '#fff',
                    color: selected === index ? '#fff' : '#000',
                    border: '1px solid #ccc',
                    cursor: 'pointer'
                  }}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <p style={{ background: '#eee', padding: 10, borderRadius: 5 }}>
              {current.speaker}: {current.text}
            </p>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>أنهيت التدريب!</h2>
          <p>نتيجتك: {score} من {scenarios[0].dialogue.filter(d => d.options).length}</p>
        </div>
      )}
    </div>
  );
}
