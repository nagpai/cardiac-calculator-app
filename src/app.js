/**
 * WordPress dependencies.
 */
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Icon,
  RadioControl,
  TextControl,
  ToggleControl,
  __experimentalHeading as Heading,
  __experimentalHStack as HStack,
  __experimentalNumberControl as NumberControl,
  __experimentalText as Text,
  __experimentalVStack as VStack,
} from "@wordpress/components";
import { arrowRight } from "@wordpress/icons";
import { useState } from "react";

/**
 * Render Subscription action panel
 */
function App() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [totalCholesterol, setTotalCholesterol] = useState(0);
  const [hdlCholesterol, setHdlCholesterol] = useState(0);
  const [systolicBloodPressure, setSystolicBloodPressure] = useState(0);
  const [diabetic, setDiabetic] = useState(false);
  const [smoker, setSmoker] = useState(false);

  return (
    <HStack alignment="center">
      <Card size="medium" style={{ borderRadius: "8px" }}>
        <CardHeader>
          <Heading size={30} as="h1">
            Cardiac Risk Calculator
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing={6} alignment="left">
            <VStack spacing={3}>
              <Text size={15} weight={400} variant="muted">
                <p>
                  This calculator helps assess 10 year risk of coronary disease
                  based on Framingham study. This is only a preventive tool and
                  is in no way a replacement for professional diagonosis and
                  treatment for heart disease.{" "}
                </p>
                <p>
                  The tool can however help as a preventive reference before
                  doing any heavy physical activity, and guide you to take
                  professional medical advice, when needed.{" "}
                </p>
                Please submit the details and get your coronary risk score.
              </Text>
              <RadioControl
                label="Gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                value={gender}
                onChange={(value) => setGender(value)}
              />
              <NumberControl
                label="Age (Years)"
                value={age}
                onChange={(value) => setAge(value)}
              />
              <NumberControl
                label="Total Cholesterol (mg/dL)"
                value={totalCholesterol}
                onChange={(value) => setTotalCholesterol(value)}
              />
              <NumberControl
                label="HDL Cholesterol (mg/dL)"
                value={hdlCholesterol}
                onChange={(value) => setHdlCholesterol(value)}
              />
              <NumberControl
                label="Systolic Blood Pressure (mm Hg)"
                value={systolicBloodPressure}
                onChange={(value) => setSystolicBloodPressure(value)}
              />
              <ToggleControl
                label="Are you diabetic?"
                checked={diabetic}
                onChange={(value) => setDiabetic(value)}
              />
              <ToggleControl
                label="Do you Smoke?"
                checked={smoker}
                onChange={(value) => setSmoker(value)}
              />

              <Button
                variant="primary"
                onClick={() => {
                  console.log("Calculate Risk");
                }}
              >
                Calculate Risk
              </Button>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </HStack>
  );
}

export default App;
