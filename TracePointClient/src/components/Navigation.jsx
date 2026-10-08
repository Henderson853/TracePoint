import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Dashboard", end: true },
    { to: "/case", label: "Cases" },
      { to: "/suspects", label: "Suspects" },
        { to: "/evidence", label: "Evidence" },
          { to: "/investigation", label: "Investigation" },
          ];
          
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
      <nav className="bg-surface border-b border-border">
            <div className="mx-auto max-w-[1600px] px-4 py-3 lg:px-6">
                    <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                                                        T
                                                                    </div>
                                                                                <div className="hidden sm:block">
                                                                                              <p className="text-[9px] uppercase tracking-[0.16em] text-neutral-500">Operations</p>
                                                                                                            <h1 className="text-sm font-bold tracking-tight text-neutral-900">TracePoint</h1>
                                                                                                                        </div>
                                                                                                                                  </div>
                                                                                                                                  
          <nav className="hidden md:flex items-center gap-1">
                      {links.map((link) => (
                                    <NavLink
                                                    key={link.to}
                                                                    to={link.to}
                                                                                    end={link.end}
                                                                                                    className={({ isActive }) =>
                                                                                                                      isActive
                                                                                                                                          ? "px-3 py-2 rounded-dashboard bg-primary-soft text-primary font-medium text-sm"
                                                                                                                                                              : "px-3 py-2 rounded-dashboard hover:bg-surface-alt text-neutral-900 font-medium text-sm"
                                                                                                                                                                              }
                                                                                                                                                                                            >
                                                                                                                                                                                                            {link.label}
                                                                                                                                                                                                                          </NavLink>
                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                </nav>
                                                                                                                                                                                                                                                
          <button
                      type="button"
                                  onClick={() => setIsOpen(!isOpen)}
                                              className="md:hidden p-2 rounded-dashboard hover:bg-surface-alt"
                                                          aria-label="Toggle navigation"
                                                                    >
                                                                                <svg className="h-6 w-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                              {isOpen ? (
                                                                                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                                                                            ) : (
                                                                                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                                                                                                                                          )}
                                                                                                                                                                      </svg>
                                                                                                                                                                                </button>
                                                                                                                                                                                
          <div className="hidden lg:flex items-center gap-3 rounded-dashboard border border-border bg-surface-alt px-3 py-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary text-xs">
                                    AJ
                                                </div>
                                                            <div className="leading-tight">
                                                                          <p className="text-xs font-semibold text-neutral-900">Alyssa Jones</p>
                                                                                        <p className="text-[11px] text-neutral-500">Ops lead</p>
                                                                                                    </div>
                                                                                                              </div>
                                                                                                                      </div>
                                                                                                                      
        {isOpen && (
                  <div className="mt-4 space-y-2 md:hidden pb-4 border-t border-border pt-4">
                              {links.map((link) => (
                                            <NavLink
                                                            key={link.to}
                                                                            to={link.to}
                                                                                            end={link.end}
                                                                                                            onClick={() => setIsOpen(false)}
                                                                                                                            className={({ isActive }) =>
                                                                                                                                              isActive
                                                                                                                                                                  ? "block px-3 py-2 rounded-dashboard bg-primary-soft text-primary font-medium text-sm"
                                                                                                                                                                                      : "block px-3 py-2 rounded-dashboard hover:bg-surface-alt text-neutral-900 font-medium text-sm"
                                                                                                                                                                                                      }
                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                    {link.label}
                                                                                                                                                                                                                                                  </NavLink>
                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                          </nav>
                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                            