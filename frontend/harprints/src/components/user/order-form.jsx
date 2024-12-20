import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

export function OrderForm() {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="file">Upload Document</Label>
        <div className="mt-1 flex items-center space-x-2">
          <Input id="file" type="file" className="flex-grow" />
          <Button
            size="icon"
            className="bg-[#00ADB5] hover:bg-[#393E46] text-white"
          >
            <Upload className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="sets">Number of Sets</Label>
        <Input
          id="sets"
          type="number"
          min="1"
          defaultValue="1"
          className="mt-1"
        />
      </div>
      <div>
        <Label>Color Options</Label>
        <RadioGroup defaultValue="bw" className="mt-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bw" id="bw" />
            <Label htmlFor="bw">Black & White</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="color" id="color" />
            <Label htmlFor="color">Color</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label>Print Sides</Label>
        <RadioGroup defaultValue="front" className="mt-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="front" id="front" />
            <Label htmlFor="front">Front Only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="both" />
            <Label htmlFor="both">Front & Back</Label>
          </div>
        </RadioGroup>
      </div>
    </form>
  );
}
