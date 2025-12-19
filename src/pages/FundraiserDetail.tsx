
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Heart } from 'lucide-react';
import { fundraisers } from '@/constants/fundraisers';
import ShareButton from '@/components/ShareButton';
import { useToast } from '@/components/ui/use-toast';

const FundraiserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showCustomAmount, setShowCustomAmount] = useState<boolean>(false);
  
  const fundraiser = fundraisers.find(f => f.id === Number(id));
  
  if (!fundraiser) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Fundraiser Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the fundraiser you're looking for.</p>
          <Link 
            to="/fundraisers" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Fundraisers
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAmountSelection = (amount: number) => {
    setDonationAmount(amount);
    setShowCustomAmount(false);
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(value);
    
    // Update donation amount if valid number
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setDonationAmount(numValue);
    }
  };
  
  const handleCustomAmountToggle = () => {
    setShowCustomAmount(!showCustomAmount);
    if (!showCustomAmount) {
      setCustomAmount('');
    }
  };

  const handleDonate = () => {
    // Check if donation amount is valid
    if (donationAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically process the donation
    toast({
      title: "Thank you for your donation!",
      description: `You've donated $${donationAmount.toFixed(2)} to ${fundraiser.title}.`,
      variant: "default"
    });
  };

  const handleFollow = () => {
    toast({
      title: "Following fundraiser",
      description: `You are now following ${fundraiser.title}. We'll keep you updated on their progress.`,
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/fundraisers" 
          className="inline-flex items-center text-primary hover:underline mb-8 block"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Fundraisers
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">{fundraiser.title}</h1>
          
          <div className="md:flex gap-8">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <img 
                src={fundraiser.image} 
                alt={fundraiser.title} 
                className="w-full h-[400px] object-cover rounded-xl mb-6"
              />
              
              <div className="flex items-center mb-6">
                <img 
                  src={fundraiser.organizer.avatar} 
                  alt={fundraiser.organizer.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <span className="text-sm text-muted-foreground">Organized by</span>
                  <h3 className="font-medium">{fundraiser.organizer.name}</h3>
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none mb-6" 
                dangerouslySetInnerHTML={{ __html: fundraiser.fullDescription }}
              />
              
              <div className="flex space-x-4">
                <ShareButton title={fundraiser.title} />
                <button 
                  onClick={handleFollow}
                  className="flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Follow
                </button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-background border rounded-xl p-6 shadow-sm sticky top-24">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Raised: ${fundraiser.raised.toLocaleString()}</span>
                    <span className="font-medium">Goal: ${fundraiser.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(fundraiser.raised / fundraiser.goal) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mb-6">
                    {Math.round((fundraiser.raised / fundraiser.goal) * 100)}% of goal reached
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{fundraiser.daysLeft} days left</span>
                </div>
                
                <button 
                  className="w-full mb-4 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={handleDonate}
                >
                  Donate Now
                </button>
                
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Select Amount</span>
                  <div className="grid grid-cols-3 gap-2 mt-2 mb-4">
                    {[10, 25, 50, 100, 250, 500].map(amount => (
                      <button 
                        key={amount}
                        className={`border py-2 rounded hover:bg-secondary transition-colors ${donationAmount === amount && !showCustomAmount ? 'bg-primary/10 border-primary text-primary' : ''}`}
                        onClick={() => handleAmountSelection(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  {showCustomAmount ? (
                    <div className="mt-2 mb-4">
                      <label htmlFor="customAmount" className="sr-only">Enter custom amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                        <input
                          id="customAmount"
                          type="text"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Enter amount"
                          className="w-full py-2 pl-8 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
                          autoFocus
                        />
                      </div>
                    </div>
                  ) : (
                    <button 
                      className="text-primary hover:underline"
                      onClick={handleCustomAmountToggle}
                    >
                      Enter custom amount
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Other Fundraisers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundraisers
              .filter(f => f.id !== fundraiser.id)
              .slice(0, 3)
              .map(relatedFundraiser => (
                <Link 
                  key={relatedFundraiser.id} 
                  to={`/fundraisers/${relatedFundraiser.id}`}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-muted">
                    <img 
                      src={relatedFundraiser.image} 
                      alt={relatedFundraiser.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">{relatedFundraiser.title}</h3>
                    <div className="mb-3">
                      <div className="w-full bg-secondary rounded-full h-1.5 mb-1">
                        <div 
                          className="bg-primary h-1.5 rounded-full" 
                          style={{ width: `${(relatedFundraiser.raised / relatedFundraiser.goal) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>${relatedFundraiser.raised.toLocaleString()} raised</span>
                        <span>{relatedFundraiser.daysLeft} days left</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserDetail;
