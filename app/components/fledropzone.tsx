import { useRef, useState, DragEvent } from "react";
import { Upload, File, CheckCircle2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface FileDropzoneProps {
  onFileSelected: (file: File) => void;
  acceptedTypes?: string;
  maxSizeMB?: number;
  className?: string;
}

export default function FileDropzone({
  onFileSelected,
  acceptedTypes = ".webm,.m4a",
  maxSizeMB = 10,
  className,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate processing
      onFileSelected(file);
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      console.error("Error processing file:", error);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer",
        "bg-dropzone-bg hover:bg-dropzone-bg-hover",
        "border-dropzone-border hover:border-primary",
        "shadow-dropzone hover:shadow-dropzone-hover",
        "p-12 flex flex-col items-center justify-center space-y-6",
        isDragOver &&
          "bg-dropzone-bg-active border-primary scale-[1.02] shadow-dropzone-hover",
        isProcessing && "pointer-events-none",
        className
      )}
      onClick={() => !isProcessing && inputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      tabIndex={0}
      role="button"
      aria-label="Upload interview recording"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

      <input
        type="file"
        accept={acceptedTypes}
        ref={inputRef}
        className="hidden"
        onChange={handleInputChange}
      />

      {/* Icon container */}
      <div
        className={cn(
          "relative z-10 p-6 rounded-full transition-all duration-300",
          "bg-primary/10 group-hover:bg-primary/20",
          isDragOver && "bg-primary/30 scale-110",
          isProcessing && "animate-bounce-gentle"
        )}
      >
        {isProcessing ? (
          <CheckCircle2 className="w-12 h-12 text-primary animate-scale-in" />
        ) : (
          <Upload
            className={cn(
              "w-12 h-12 text-dropzone-text transition-all duration-300",
              "group-hover:text-primary group-hover:scale-110",
              isDragOver && "text-primary scale-125"
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-3">
        <h3
          className={cn(
            "text-xl font-semibold transition-colors duration-300",
            "text-dropzone-text group-hover:text-primary",
            isDragOver && "text-primary"
          )}
        >
          {isProcessing
            ? "Processing your interview..."
            : isDragOver
              ? "Drop your interview recording here"
              : "Upload Your Interview Recording"}
        </h3>

        <p className="text-muted-foreground max-w-sm">
          {isProcessing
            ? "Analyzing interview content and structure"
            : "Drag & drop your interview recording here, or click to browse and select"}
        </p>

        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <File className="w-4 h-4" />
            <span>Audio/Video (WEBM, M4A)</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <span>Max {maxSizeMB}MB</span>
        </div>
      </div>

      {/* Processing indicator */}
      {isProcessing && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Processing...</p>
          </div>
        </div>
      )}

      {/* Drag overlay */}
      {isDragOver && (
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm border-2 border-primary rounded-2xl z-10 flex items-center justify-center">
          <div className="text-center space-y-2">
            <Upload className="w-16 h-16 text-primary mx-auto animate-bounce-gentle" />
            <p className="text-lg font-medium text-primary">Drop to upload</p>
          </div>
        </div>
      )}
    </div>
  );
}
