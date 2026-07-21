'use client'

import { Clock, Sun, Moon, Zap, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type WorkingHour = {
  id?: string
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
  isOpen: boolean
  openTime: number
  closeTime: number
}

const dayNames: Record<WorkingHour['dayOfWeek'], string> = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday'
}

const dayEmojis: Record<WorkingHour['dayOfWeek'], string> = {
  MONDAY: '🌙',
  TUESDAY: '🌤️',
  WEDNESDAY: '☀️',
  THURSDAY: '🌤️',
  FRIDAY: '🔥',
  SATURDAY: '🎉',
  SUNDAY: '😴'
}

const dayColors: Record<WorkingHour['dayOfWeek'], string> = {
  MONDAY: 'from-blue-500 to-blue-600',
  TUESDAY: 'from-indigo-500 to-indigo-600',
  WEDNESDAY: 'from-yellow-500 to-yellow-600',
  THURSDAY: 'from-green-500 to-green-600',
  FRIDAY: 'from-orange-500 to-orange-600',
  SATURDAY: 'from-purple-500 to-purple-600',
  SUNDAY: 'from-red-500 to-red-600'
}

interface WorkingHoursTabProps {
  workingHours: WorkingHour[] 
  onUpdateWorkingHour: (day: WorkingHour['dayOfWeek'], field: keyof WorkingHour, value: any) => void
  onSave: () => void
  saving: boolean
  numberToTime: (num: number) => string
  timeToNumber: (time: string) => number
}

export function WorkingHoursTab({ 
  workingHours, 
  onUpdateWorkingHour, 
  onSave, 
  saving, 
  numberToTime, 
  timeToNumber 
}: WorkingHoursTabProps) {
  const [hoveredDay, setHoveredDay] = useState<WorkingHour['dayOfWeek'] | null>(null)

  const calculateDuration = (openTime: number, closeTime: number) => {
    const open = new Date()
    open.setHours(Math.floor(openTime / 100), openTime % 100)
    const close = new Date()
    close.setHours(Math.floor(closeTime / 100), closeTime % 100)
    return Math.abs(close.getTime() - open.getTime()) / (1000 * 60 * 60)
  }

  const openDays = workingHours.filter(day => day.isOpen).length
  const totalHours = workingHours.reduce((sum, day) => {
    if (day.isOpen) {
      return sum + calculateDuration(day.openTime, day.closeTime)
    }
    return sum
  }, 0)

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header with Stats */}
        <Card className="border-0 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader className="">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">Business Hours</CardTitle>
                  <p className="text-sm text-muted-foreground">Configure availability for each day</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  {openDays}/7 days open
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {totalHours.toFixed(1)}h total
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="flex justify-end">
              <Button 
                onClick={onSave} 
                disabled={saving}
                className="gap-2 bg-gradient-to-r from-primary to-primary-foreground hover:from-primary/90"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Schedule
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Days Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {workingHours.map((day, index) => {
            const duration = calculateDuration(day.openTime, day.closeTime)
            const isHovered = hoveredDay === day.dayOfWeek
            const dayColor = dayColors[day.dayOfWeek]
            
            return (
              <motion.div
                key={day.dayOfWeek}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onHoverStart={() => setHoveredDay(day.dayOfWeek)}
                onHoverEnd={() => setHoveredDay(null)}
                className="group text-black"
              >
                <Card className={`h-full border-2 transition-all duration-300 ${
                  day.isOpen 
                    ? `border-primary/20 bg-gradient-to-br ${dayColor}  bg-clip-text text-transparent bg-gradient-to-r from-background via-white/50 to-background`
                    : 'border-border/50 bg-muted/50 hover:border-border'
                } hover:shadow-lg`}>
                  
                  <CardHeader className="">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 justify-start">
                        
                        <CardTitle className={`text-sm font-bold transition-colors group-hover:text-primary ${
                          day.isOpen ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                          {dayNames[day.dayOfWeek].slice(0, 3)}
                        </CardTitle>
                        <Switch
                        id={`open-${day.dayOfWeek}`}
                        checked={day.isOpen}
                        onCheckedChange={(checked) => onUpdateWorkingHour(day.dayOfWeek, 'isOpen', checked)}
                        className={`data-[state=checked]:bg-primary transition-all ${
                          day.isOpen ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                      <span className="text-2xl">{dayEmojis[day.dayOfWeek]}</span>
                      </div>
                      
                      {/* Status Indicator */}
                      <div className={`w-2 h-2 rounded-full ${
                        day.isOpen ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-2">
                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-3 p-2 bg-background/20 rounded-lg">
                      
                      <Label 
                        htmlFor={`open-${day.dayOfWeek}`} 
                        className={`text-sm font-medium ${
                          day.isOpen ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {day.isOpen ? 'Open' : 'Closed'}
                      </Label>
                    </div>

                    {/* Time Inputs */}
                    <AnimatePresence mode="wait">
                      {day.isOpen ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>⏰ Operating Hours</span>
                            {duration && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="text-xs bg-primary/10 px-2 py-1 rounded-full text-primary font-medium">
                                    {duration}h
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Total operating time: {duration.toFixed(1)} hours</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <div className="flex-1 space-y-1 text-black">
                              <Label className="text-xs flex items-center gap-1">
                                <Sun className="w-3 h-3" />
                                Open
                              </Label>
                              <Input
                                type="time"
                                value={numberToTime(day.openTime)}
                                onChange={(e) => onUpdateWorkingHour(day.dayOfWeek, 'openTime', e.target.value)}
                                className="h-10 text-sm text-black"
                              />
                            </div>
                            
                            <div className="flex-1 space-y-1 text-black">
                              <Label className="text-xs flex items-center gap-1">
                                <Moon className="w-3 h-3" />
                                Close
                              </Label>
                              <Input
                                type="time"
                                value={numberToTime(day.closeTime)}
                                onChange={(e) => onUpdateWorkingHour(day.dayOfWeek, 'closeTime', e.target.value)}
                                className="h-10 text-sm text-black"
                              />
                            </div>
                          </div>

                          {/* Quick Actions */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0.2, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="flex gap-1 p-2 bg-primary/5 rounded-lg text-gray-500"
                            >
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs flex-1"
                                onClick={() => {
                                  onUpdateWorkingHour(day.dayOfWeek, 'openTime', '09:00')
                                  onUpdateWorkingHour(day.dayOfWeek, 'closeTime', '17:00')
                                }}
                              >
                                <Zap className="w-3 h-3 mr-1" />
                                9-5
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs flex-1"
                                onClick={() => {
                                  onUpdateWorkingHour(day.dayOfWeek, 'openTime', '08:00')
                                  onUpdateWorkingHour(day.dayOfWeek, 'closeTime', '18:00')
                                }}
                              >
                                8-6
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center py-4"
                        >
                          <div className="w-12 h-12 mx-auto mb-2 bg-muted/30 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <p className="text-xs text-muted-foreground">Closed all day</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <Card className="border-0 bg-muted/20">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Open</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <span>Closed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>Click to edit times</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3" />
                <span>Quick presets on hover</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}